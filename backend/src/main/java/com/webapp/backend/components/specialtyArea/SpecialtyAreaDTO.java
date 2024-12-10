package com.webapp.backend.components.specialtyArea;

import jakarta.persistence.Column;
import jakarta.persistence.Lob;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
public class SpecialtyAreaDTO {
    private Integer id;

    @NotEmpty(message = "specialty name is mandatory")
    private String name;

    @NotNull(message = "description is mandatory")
    private String description;

    public SpecialtyAreaDTO(SpecialtyArea specialtyArea){
        this.id = specialtyArea.getSpecialtyId();
        this.name = specialtyArea.getName();
        this.description = specialtyArea.getDescription();
    }

}
