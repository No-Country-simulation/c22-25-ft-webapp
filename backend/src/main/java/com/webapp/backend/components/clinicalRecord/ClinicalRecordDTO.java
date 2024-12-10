package com.webapp.backend.components.clinicalRecord;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ClinicalRecordDTO {
    @NotNull
    private Date date;
    @NotNull
    private Status status;
}
