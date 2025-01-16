package pl.com.bookify.server.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import pl.com.bookify.server.auth.data.request.ProfilePostRequest;
import pl.com.bookify.server.auth.data.request.RegisterRequest;
import pl.com.bookify.server.auth.data.request.mapper.ProfilePostRequestMapper;
import pl.com.bookify.server.auth.data.response.ProfileResponse;

@Service
public class AuthService {

    @Autowired
    private RestTemplate restTemplate;

    private static final String PROFILE_URL = "http://localhost:8082/bookify/api/v1/profiles";

        public void register(RegisterRequest request) {
            ProfilePostRequest profilePostRequest = ProfilePostRequestMapper.INSTANCE.registerRequestToProfilePostRequestWriter(request, "ADMIN", false);
            restTemplate.postForObject(PROFILE_URL + "/addProfile", profilePostRequest, Void.class);
        }

    public boolean authenticate(String email, String password) {
        ProfileResponse profile = restTemplate.getForObject(
                PROFILE_URL + "/getProfileByEmail/{email}",
                ProfileResponse.class,
                email
        );

        if (profile == null) {
            throw new RuntimeException("Profile not found");
        }

        return password.equals(profile.password());
    }
}
