package pl.com.bookify.server.auth.data.response;

public record ProfileResponse (
        Long id,
        String firstName,
        String email,
        String password,
        String role,
        Boolean isAuthor) {}