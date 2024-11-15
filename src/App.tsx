import React, { useCallback, useState } from "react";
import {
  Alert,
  Button,
  Flex,
  Loader,
  Select,
  SelectOption,
  Table,
  TableColumnConfig,
  TextInput,
} from "@gravity-ui/uikit";
import { MOCK_SUGGESTIONS, REGIONS } from "./App.constants";
import { Suggestion, useSuggestions } from "./App.api";
import { toaster } from "@gravity-ui/uikit/toaster-singleton-react-18";

import "./App.css";

type RegionName = (typeof REGIONS)[number]["city"];

const REGION_SELECT_OPTIONS: SelectOption[] = REGIONS.map(({ city }) => ({
  value: city,
  content: city,
}));

const COLUMNS: TableColumnConfig<Suggestion>[] = [
  {
    id: "name",
    name: "Название заведения",
    width: "15%",
  },
  {
    id: "address",
    name: "Адрес",
    width: "20%",
  },
  {
    id: "review",
    name: "Отзыв",
  },
  {
    id: "rating",
    name: "Рейтинг",
    align: "center",
  },
];

const App = () => {
  const [selectedRegion, setSelectedRegion] = useState<RegionName | null>(null);
  const [prompt, setPrompt] = useState("");
  const isSearchDisabled = selectedRegion === null || !prompt;

  const {
    refetch: getSuggestions,
    isLoading: isSuggestionsLoading,
    error: suggestionsError,
  } = useSuggestions(selectedRegion ?? "", prompt);

  const onRegionUpdate = useCallback(([updatedRegion]: string[]) => {
    setSelectedRegion(updatedRegion as RegionName);
  }, []);

  const onPromptUpdate = useCallback((updatedPrompt: string) => {
    setPrompt(updatedPrompt);
  }, []);

  const onSearchClick = useCallback(() => {
    if (isSearchDisabled) {
      toaster.add({
        theme: "danger",
        title: "Ошибка",
        content: "Запрос и регион обязательны для ввода",
        name: "search-error",
      });
      return;
    }
    getSuggestions();
  }, []);

  const getSuggestionsContent = () => {
    if (suggestionsError) {
      return (
        <Alert
          theme="danger"
          title="Failed to get suggestions!"
          message={suggestionsError?.message}
        />
      );
    }

    if (isSuggestionsLoading) {
      return (
        <Flex justifyContent="center">
          <Loader />
        </Flex>
      );
    }

    return <Table data={MOCK_SUGGESTIONS} columns={COLUMNS} />;
  };

  return (
    <Flex direction="column" className="page" gap={2}>
      <Flex gap={1}>
        <TextInput
          autoComplete={false}
          autoFocus
          placeholder="Введите запрос..."
          onUpdate={onPromptUpdate}
        />
        <Select
          placeholder="Выберите регион"
          value={selectedRegion ? [selectedRegion] : undefined}
          options={REGION_SELECT_OPTIONS}
          onUpdate={onRegionUpdate}
          className="select"
        />
        <Button
          view="action"
          onClick={onSearchClick}
          loading={isSuggestionsLoading}
        >
          Найти
        </Button>
      </Flex>
      {getSuggestionsContent()}
    </Flex>
  );
};

export default App;
