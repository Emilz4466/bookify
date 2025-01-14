package pl.com.bookify.server.profile;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import pl.com.bookify.server.commons.stereotypes.AbstractEntity;

@Entity
public class Profile extends AbstractEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "s_profile_id")
    @SequenceGenerator(name = "s_profile_id", sequenceName = "s_profile_id", allocationSize = 10, initialValue = 100000)
    private Long id;

    @NotNull
    private String firstName;

    @NotNull
    private String lastName;

    @NotNull
    private String email;

    @NotNull
    private String password;

    //TODO enum, connect with security
    private String role;

    private Boolean isAuthor;

    public Profile(Long id, String firstName, String lastName, String email, String password, String role, Boolean isAuthor) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.role = role;
        this.isAuthor = isAuthor;
    }

    public Profile() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Boolean getIsAuthor() {
        return isAuthor;
    }

    public void setIsAuthor(Boolean isAuthor) {
        this.isAuthor = isAuthor;
    }
}
