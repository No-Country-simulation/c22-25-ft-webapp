package com.webapp.backend.user;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.webapp.backend.components.specialtyArea.SpecialtyAreaDTO;
import com.webapp.backend.role.Role;
import com.webapp.backend.role.RoleDTO;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class UserDTO {
    @NotNull(message = "dni is mandatory")
    private int dni;
    @NotEmpty(message = "firstName is mandatory")
    private String firstName;
    @NotEmpty(message = "lastName is mandatory")
    private String lastName;
    private String password;
    @NotEmpty(message = "email is mandatory")
    @Email
    private String email;
    @NotNull(message = "birthday is mandatory")
    @JsonFormat(pattern = "dd-MM-yyyy")
    private LocalDate birthday;
    private Boolean enabled;
    private List<RoleDTO> roles;
    private List<SpecialtyAreaDTO> specialtyArea;

    public UserDTO(User user){
        this.dni = user.getDni();
        this.firstName = user.getFirstName();
        this.lastName = user.getLastName();
        this.password = user.getPassword();
        this.email = user.getEmail();
        this.birthday = user.getBirthday();
        this.enabled = user.isEnabled();
        this.roles = user.getRole().stream().map(RoleDTO::new).toList();
        this.specialtyArea = user.getSpecialtyArea().stream().map(SpecialtyAreaDTO::new).toList();
    }
}
