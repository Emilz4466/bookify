import {
  InputAdornment,
  styled,
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";
import { brown } from "@mui/material/colors";
import { forwardRef } from "react";
import {
  RegisterOptions,
  useController,
  UseControllerProps,
} from "react-hook-form";

export interface TextFieldProps
  extends Pick<
      MuiTextFieldProps,
      "label" | "children" | "select" | "fullWidth" | "type" | "placeholder"
    >,
    Pick<UseControllerProps<any>, "name" | "control"> {
  rules?: RegisterOptions;
  icon?: React.ReactNode;
}

export const TextField = forwardRef((props: TextFieldProps, ref) => {
  const { fullWidth, name, control, label, type, rules, icon, ...rest } = props;
  const { field, fieldState } = useController({
    name: name,
    control: control,
    rules: rules,
  });

  return (
    <TextFieldStyled
      fullWidth={fullWidth}
      size="small"
      variant="outlined"
      type={type}
      label={label}
      error={fieldState.error !== undefined}
      helperText={fieldState.error?.message}
      {...rest}
      {...ref}
      {...field}
      value={field.value || ""}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">{icon}</InputAdornment>
          ),
        },
      }}
    />
  );
});

// eslint-disable-next-line no-empty-pattern
const TextFieldStyled = styled(MuiTextField)<MuiTextFieldProps>(({}) => ({
  "& .MuiInputBase-root": {
    borderRadius: "0px",
    height: "50px",
    "&.Mui-focused": {
      "& fieldset": {
        borderColor: brown[600],
      },
    },
    "&:hover fieldset": {
      borderColor: brown[500],
    },
  },
  "& .MuiFormHelperText-root ": {
    fontWeight: "bolder",
  },
  "& .MuiInputLabel-root": {
    marginTop: "5px",
    "&.Mui-focused": {
      fontWeight: "bold",
      color: brown[600],
    },
  },
  "& input:-webkit-autofill": {
    transition: "background-color 0s 600000s, color 0s 600000s",
  },
  "input:-webkit-autofill:focus": {
    transition: "background-color 0s 600000s, color 0s 600000s",
  },
  "& .MuiFormHelperText-root.Mui-error": {
    backgroundColor: "transparent",
  },
}));
