package pl.com.bookify.server.profile;

import org.springframework.data.jpa.domain.Specification;

public class ProfileSpecifications {

    public static Specification<Profile> firstNameFilter(String firstName) {
        return (root, query, builder) -> builder.like(root.get("firstName"), "%" + firstName + "%");
    }

}
