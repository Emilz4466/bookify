package pl.com.bookify.server.profile.data.response.mapper;

import javax.annotation.processing.Generated;
import pl.com.bookify.server.profile.Profile;
import pl.com.bookify.server.profile.data.response.ProfileGetResponse;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2025-01-14T11:14:42+0100",
    comments = "version: 1.6.3, compiler: javac, environment: Java 17.0.13 (Eclipse Adoptium)"
)
public class ProfileGetResponseMapperImpl implements ProfileGetResponseMapper {

    @Override
    public ProfileGetResponse entityToResponse(Profile profile) {
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

        ProfileGetResponse profileGetResponse = new ProfileGetResponse( id, firstName, email, password, role, isAuthor );

        return profileGetResponse;
    }
}
