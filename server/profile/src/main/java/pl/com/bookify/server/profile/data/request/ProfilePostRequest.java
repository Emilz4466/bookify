package pl.com.bookify.server.profile.data.request;

import jakarta.validation.constraints.NotNull;

public record ProfilePostRequest(
        @NotNull String firstName,
        @NotNull String lastName,
        @NotNull String email,
        @NotNull String password,
        String role,
        Boolean isAuthor) {}
