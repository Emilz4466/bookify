import {
  Grid,
  SearchIcon,
  TextField,
  TextFieldProps,
} from "@/components/Atoms";

interface SearchFieldProps
  extends Pick<
    TextFieldProps,
    "name" | "control" | "fullWidth" | "placeholder"
  > {}

export const SearchField = (props: SearchFieldProps) => {
  const { fullWidth, placeholder, name, control } = props;

  return (
    <Grid container size={12}>
      <TextField
        type={"search"}
        placeholder={placeholder}
        name={name}
        fullWidth={fullWidth}
        control={control}
        icon={<SearchIcon />}
      />
    </Grid>
  );
};
