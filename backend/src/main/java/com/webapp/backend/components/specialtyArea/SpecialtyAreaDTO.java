package com.webapp.backend.components.specialtyArea;

import jakarta.persistence.Column;
import jakarta.persistence.Lob;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
public class SpecialtyAreaDTO {

    private String name;

    private String description;

    public SpecialtyAreaDTO(SpecialtyArea specialtyArea){
        this.name = specialtyArea.getName();
        this.description = specialtyArea.getDescription();
    }

}
