package pl.com.bookify.server.profile.data.response.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import pl.com.bookify.server.profile.Profile;
import pl.com.bookify.server.profile.data.response.ProfileGetResponse;

@Mapper()
public interface ProfileGetResponseMapper {
    ProfileGetResponseMapper INSTANCE = Mappers.getMapper(ProfileGetResponseMapper.class);

    ProfileGetResponse entityToResponse(Profile profile);

}
