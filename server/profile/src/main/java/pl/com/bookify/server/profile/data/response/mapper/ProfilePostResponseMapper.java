package pl.com.bookify.server.profile.data.response.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import pl.com.bookify.server.profile.Profile;
import pl.com.bookify.server.profile.data.response.ProfilePostResponse;

@Mapper()
public interface ProfilePostResponseMapper {
    ProfilePostResponseMapper INSTANCE = Mappers.getMapper(ProfilePostResponseMapper.class);

    ProfilePostResponse entityToResponse(Profile profile);
}
