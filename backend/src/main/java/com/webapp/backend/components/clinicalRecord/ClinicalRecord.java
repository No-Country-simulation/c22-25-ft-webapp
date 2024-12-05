package com.webapp.backend.components.clinicalRecord;

import com.webapp.backend.components.consultationRecord.ConsultationRecord;
import com.webapp.backend.components.patient.Patient;
import com.webapp.backend.user.User;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@Table(name = "clinical_record")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ClinicalRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int recordId;

    @ManyToOne(targetEntity = Patient.class)
    @JoinColumn(name = "patient_id")
    private Patient patient;

    @ManyToOne(targetEntity = User.class)
    @JoinColumn(name = "user_id")
    private User user;

    @Column(nullable = false, name = "date")
    private Date date;

    @Enumerated(EnumType.STRING)
    private Status status;

    @OneToOne(mappedBy = "clinicalRecord", cascade = CascadeType.ALL, fetch = FetchType.EAGER, optional = false)
    private ConsultationRecord consultationRecord;

    @Override
    public String toString() {
        return "ClinicalRecord{" +
                "recordId=" + recordId +
                ", patient=" + patient +
                ", user=" + user +
                ", date=" + date +
                ", status=" + status +
                '}';
    }
}