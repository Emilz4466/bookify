package pl.com.bookify.server.auth.data.request;

import jakarta.validation.constraints.NotNull;

public record ProfilePostRequest(
        @NotNull String firstName,
        @NotNull String lastName,
        @NotNull String email,
        @NotNull String password,
        String role,
        Boolean isAuthor) {

    public ProfilePostRequest registerWriter(String role, Boolean isAuthor) {
        return new ProfilePostRequest(firstName(), lastName(), email(), password(), role, isAuthor);
    }
}