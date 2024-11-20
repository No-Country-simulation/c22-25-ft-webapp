package com.webapp.backend.components.specialtyArea;

import com.webapp.backend.components.user.User;
import jakarta.persistence.*;

@Entity
@Table(name = "specialty_area_user")
public class SpecialtyArea_User {
    @Id
    @Column(name = "specialist_id")
    private Long specialistId;

    @ManyToOne(targetEntity = User.class)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne (targetEntity = SpecialtyArea.class)
    @JoinColumn(name = "specialty_id")
    private SpecialtyArea specialtyArea;

    public SpecialtyArea_User(Long specialistId) {
        this.specialistId = specialistId;
    }

    public SpecialtyArea_User() {
    }

    public Long getSpecialistId() {
        return specialistId;
    }

    public void setSpecialistId(Long specialistId) {
        this.specialistId = specialistId;
    }

    @Override
    public String toString() {
        return "SpecialtyArea_User{" +
                "specialistId=" + specialistId +
                ", user=" + user +
                ", specialtyArea=" + specialtyArea +
                '}';
    }
}
