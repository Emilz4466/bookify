package pl.com.bookify.server.auth.data.request.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;
import pl.com.bookify.server.auth.data.request.ProfilePostRequest;
import pl.com.bookify.server.auth.data.request.RegisterRequest;

@Mapper()
public interface ProfilePostRequestMapper {
    ProfilePostRequestMapper INSTANCE = Mappers.getMapper(ProfilePostRequestMapper.class);

    @Mapping(target = "role", ignore = true)
    @Mapping(target = "isAuthor", ignore = true)
    ProfilePostRequest registerRequestToPostRequest(RegisterRequest request);

    default ProfilePostRequest registerRequestToProfilePostRequestWriter(RegisterRequest request, String role, Boolean isAuthor) {
        ProfilePostRequest postRequest = registerRequestToPostRequest(request);
        return postRequest.registerWriter(role, isAuthor);
    }

}