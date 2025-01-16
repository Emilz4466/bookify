package pl.com.bookify.server.profile.exception;

public class ProfileNotFoundException extends RuntimeException {
    public ProfileNotFoundException(String message) {
        super("Profile with " + message + " not found.");
    }
}
