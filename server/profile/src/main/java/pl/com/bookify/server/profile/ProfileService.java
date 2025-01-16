package pl.com.bookify.server.profile;

import io.micrometer.common.util.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import pl.com.bookify.server.profile.data.request.ProfileFindAllRequest;
import pl.com.bookify.server.profile.data.request.ProfilePostRequest;
import pl.com.bookify.server.profile.data.request.mapper.ProfilePostRequestMapper;
import pl.com.bookify.server.profile.data.response.ProfileGetResponse;
import pl.com.bookify.server.profile.data.response.ProfilePostResponse;
import pl.com.bookify.server.profile.data.response.mapper.ProfileGetResponseMapper;
import pl.com.bookify.server.profile.data.response.mapper.ProfilePostResponseMapper;
import pl.com.bookify.server.profile.exception.ProfileNotFoundException;

import java.util.List;
import java.util.Optional;

import static pl.com.bookify.server.profile.ProfileSpecifications.firstNameFilter;

@Service
public class ProfileService {

    @Autowired
    ProfileRepo profileRepo;

    public ProfilePostResponse addProfile(ProfilePostRequest request) {
        Profile profile = ProfilePostRequestMapper.INSTANCE.requestToEntity(request);
        return ProfilePostResponseMapper.INSTANCE.entityToResponse(profileRepo.save(profile));
    }

    public ProfileGetResponse getProfile(Long id) {
        return ProfileGetResponseMapper.INSTANCE.entityToResponse(profileRepo.getReferenceById(id));
    }

    public ProfilePostResponse updateProfile(Long id, ProfilePostRequest request) {
        Profile profile = profileRepo.getReferenceById(id);
        ProfilePostRequestMapper.INSTANCE.updateEntityFromRequest(request, profile);
        return ProfilePostResponseMapper.INSTANCE.entityToResponse(profileRepo.save(profile));
    }

    public void deleteProfile(Long id) {
        profileRepo.deleteById(id);
    }

    public List<ProfileGetResponse> findAll(ProfileFindAllRequest request) {
        Specification<Profile> filters = Specification.where(StringUtils.isBlank(request.firstName()) ? null : firstNameFilter(request.firstName()));
        return profileRepo.findAll(filters).stream().map(ProfileGetResponseMapper.INSTANCE::entityToResponse).toList();
    }

    public ProfileGetResponse getProfileByEmail(String email) {
        Optional<Profile> profile = profileRepo.findProfileByEmail(email);
        if(profile.isEmpty()) {
            throw new ProfileNotFoundException("email " + email);
        }
        return ProfileGetResponseMapper.INSTANCE.entityToResponse(profile.get());
    }

    /*TODO
    *  commons:
    *   - abstarct entity
    *   - write read dto
    *  przemyslec sposob zapisu edycji itp, czy dtosy czy requesty itp
    *  find all ze specyfikacji
    * */
}
