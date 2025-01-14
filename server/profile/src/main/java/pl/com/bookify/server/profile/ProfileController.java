package pl.com.bookify.server.profile;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.com.bookify.server.profile.data.request.ProfileFindAllRequest;
import pl.com.bookify.server.profile.data.request.ProfilePostRequest;
import pl.com.bookify.server.profile.data.response.ProfileGetResponse;
import pl.com.bookify.server.profile.data.response.ProfilePostResponse;

import java.util.List;

@RestController
@RequestMapping("bookify/api/v1/profiles")
public record ProfileController(ProfileService profileService) {

    @PostMapping("/addProfile")
    public ResponseEntity<ProfilePostResponse> addProfile(@RequestBody ProfilePostRequest request) {
        return ResponseEntity.ok(profileService.addProfile(request));
    }

    @GetMapping("/getProfile/{id}")
    public ResponseEntity<ProfileGetResponse> getProfile(@PathVariable Long id) {
        return ResponseEntity.ok(profileService.getProfile(id));
    }

    @PostMapping("/updateProfile/{id}")
    public ResponseEntity<ProfilePostResponse> updateProfile(@PathVariable Long id, @RequestBody ProfilePostRequest request) {
        return ResponseEntity.ok(profileService.updateProfile(id, request));
    }

    @DeleteMapping("/deleteProfile/{id}")
    public ResponseEntity<Void> deleteProfile(@PathVariable Long id) {
        profileService.deleteProfile(id);
        return ResponseEntity.noContent().build();
    }


    @GetMapping("/findAllProfiles")
    public List<ProfileGetResponse> findAllProfiles(@RequestParam(required = false) String firstName) {
        return profileService.findAll(new ProfileFindAllRequest(firstName));
    }

}
