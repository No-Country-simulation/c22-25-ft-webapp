package com.webapp.backend.role;

import jakarta.validation.constraints.NotEmpty;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
public class RoleDTO {

    Integer id;
    @NotEmpty(message = "name is mandatory")
    String name;

    public RoleDTO(Role role){
        this.id = role.getRoleId();
        this.name = role.getName();
    }

}
