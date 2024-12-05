package com.webapp.backend.components.specialtyArea;

import com.webapp.backend.user.User;
import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Table(name = "specialty_area_user")
@Getter
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

    @Override
    public String toString() {
        return "SpecialtyArea_User{" +
                "specialistId=" + specialistId +
                ", user=" + user +
                ", specialtyArea=" + specialtyArea +
                '}';
    }
}
