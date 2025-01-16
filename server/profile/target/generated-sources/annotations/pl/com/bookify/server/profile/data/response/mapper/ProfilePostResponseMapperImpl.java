package pl.com.bookify.server.profile.data.response.mapper;

import javax.annotation.processing.Generated;
import pl.com.bookify.server.profile.Profile;
import pl.com.bookify.server.profile.data.response.ProfilePostResponse;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2025-01-16T11:26:39+0100",
    comments = "version: 1.6.3, compiler: javac, environment: Java 17.0.13 (Eclipse Adoptium)"
)
public class ProfilePostResponseMapperImpl implements ProfilePostResponseMapper {

    @Override
    public ProfilePostResponse entityToResponse(Profile profile) {
        if ( profile == null ) {
            return null;
        }

        Long id = null;
        String firstName = null;
        String email = null;
        String password = null;
        String role = null;
        Boolean isAuthor = null;

        id = profile.getId();
        firstName = profile.getFirstName();
        email = profile.getEmail();
        password = profile.getPassword();
        role = profile.getRole();
        isAuthor = profile.getIsAuthor();

        ProfilePostResponse profilePostResponse = new ProfilePostResponse( id, firstName, email, password, role, isAuthor );

        return profilePostResponse;
    }
}
