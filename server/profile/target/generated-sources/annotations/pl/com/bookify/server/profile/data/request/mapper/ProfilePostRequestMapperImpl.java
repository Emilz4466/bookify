package pl.com.bookify.server.profile.data.request.mapper;

import javax.annotation.processing.Generated;
import pl.com.bookify.server.profile.Profile;
import pl.com.bookify.server.profile.data.request.ProfilePostRequest;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-11-29T13:39:36+0100",
    comments = "version: 1.6.3, compiler: javac, environment: Java 17.0.13 (Eclipse Adoptium)"
)
public class ProfilePostRequestMapperImpl implements ProfilePostRequestMapper {

    @Override
    public Profile requestToEntity(ProfilePostRequest request) {
        if ( request == null ) {
            return null;
        }

        Profile profile = new Profile();

        profile.setFirstName( request.firstName() );
        profile.setLastName( request.lastName() );
        profile.setEmail( request.email() );
        profile.setPassword( request.password() );
        profile.setRole( request.role() );
        profile.setIsAuthor( request.isAuthor() );

        return profile;
    }

    @Override
    public void updateEntityFromRequest(ProfilePostRequest request, Profile profile) {
        if ( request == null ) {
            return;
        }

        profile.setFirstName( request.firstName() );
        profile.setLastName( request.lastName() );
        profile.setEmail( request.email() );
        profile.setPassword( request.password() );
        profile.setRole( request.role() );
        profile.setIsAuthor( request.isAuthor() );
    }
}
