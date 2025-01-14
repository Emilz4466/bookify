import { Grid, SearchField } from "@/components/Atoms";
import { useTranslation } from "@/hooks/useTranslation";
import { useForm } from "@/hooks/useForm";

type FormData = {};

export const TopbarSearchField = () => {
  const { t } = useTranslation();

  const { control } = useForm<FormData>();

  return (
    <form>
      <Grid size={12} container>
        <SearchField
          placeholder={t("topbar.searchFieldPlaceholder", { ns: ["main"] })}
          name={""}
          fullWidth
          control={control}
        />
      </Grid>
    </form>
  );
};
