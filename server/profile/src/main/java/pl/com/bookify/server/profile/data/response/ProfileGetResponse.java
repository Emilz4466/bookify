package pl.com.bookify.server.profile.data.response;

public record ProfileGetResponse (
        Long id,
        String firstName,
        String email,
        String password,
        String role,
        Boolean isAuthor) {}
