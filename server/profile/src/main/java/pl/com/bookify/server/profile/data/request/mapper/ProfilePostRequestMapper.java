package pl.com.bookify.server.profile.data.request.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.mapstruct.factory.Mappers;
import pl.com.bookify.server.profile.Profile;
import pl.com.bookify.server.profile.data.request.ProfilePostRequest;

@Mapper()
public interface ProfilePostRequestMapper {
    ProfilePostRequestMapper INSTANCE = Mappers.getMapper(ProfilePostRequestMapper.class);

    Profile requestToEntity(ProfilePostRequest request);
    void updateEntityFromRequest(ProfilePostRequest request, @MappingTarget Profile profile);

}