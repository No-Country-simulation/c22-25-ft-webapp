package com.webapp.backend.components.clinicalRecord;

import com.webapp.backend.components.consultationRecord.ConsultationRecord;
import com.webapp.backend.components.patient.Patient;
import com.webapp.backend.user.User;
import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "clinical_record")
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

    public ClinicalRecord() {
    }

    public ClinicalRecord(int recordId, Patient patient, User user, Date date, Status status) {
        this.recordId = recordId;
        this.patient = patient;
        this.user = user;
        this.date = date;
        this.status = status;
    }

    public int getRecordId() {
        return recordId;
    }

    public void setRecordId(int recordId) {
        this.recordId = recordId;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

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