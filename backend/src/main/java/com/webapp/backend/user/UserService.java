package com.webapp.backend.user;

import com.webapp.backend.components.specialtyArea.SpecialtyArea;
import com.webapp.backend.components.specialtyArea.SpecialtyAreaRepository;
import com.webapp.backend.role.Role;
import com.webapp.backend.role.RoleRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import static org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final SpecialtyAreaRepository specialtyAreaRepository;

    public List<UserDTO> getAllUsers(){
        List<User> dbUser = userRepository.findAll();
        return dbUser.stream().map(UserDTO::new).toList();
    }

    public UserDTO saveUser(UserDTO userData){
        List<Role> roles = new ArrayList<>();
        if(!userData.getRoles().isEmpty()){
            userData.getRoles().forEach(role -> {
                roles.add(roleRepository.findByName(role)
                        .orElseThrow(() -> new RuntimeException("Role " + role + "not found", new NotFoundException()))
                );
            });
        } else {
            roles.add(roleRepository.findByName("doctor")
                    .orElseThrow(() -> new RuntimeException("Role admin not found", new NotFoundException()))
            );
        }

        List<SpecialtyArea> specialtyAreas = new ArrayList<>();
        if(!userData.getSpecialtyArea().isEmpty()){
            userData.getSpecialtyArea().forEach(specialty -> {
                specialtyAreas.add(specialtyAreaRepository.findByName(specialty.getName())
                        .orElseThrow(() -> new RuntimeException("Specialty " + specialty.getName() + "not found", new NotFoundException()))
                );
            });
        }

        User newUser = User.builder()
                .dni(userData.getDni())
                .firstName(userData.getFirstName())
                .lastName(userData.getLastName())
                .password(userData.getPassword())
                .email(userData.getEmail())
                .role(roles)
                .specialtyArea(specialtyAreas)
                .build();

        User savedUser = userRepository.save(newUser);

        return new UserDTO(savedUser);
    }

    public UserDTO updateUser(UserDTO userData, Integer dni){
        User dbUser = userRepository.findByDni(dni).orElseThrow(() -> new RuntimeException("User not found"));

        List<Role> roles = new ArrayList<>();
        userData.getRoles().forEach(role -> {
            roles.add(roleRepository.findByName(role)
                    .orElseThrow(() -> new RuntimeException("Role " + role + "not found", new NotFoundException()))
            );
        });

        List<SpecialtyArea> specialtyAreas = new ArrayList<>();
        userData.getSpecialtyArea().forEach(specialty -> {
            specialtyAreas.add(specialtyAreaRepository.findByName(specialty.getName())
                    .orElseThrow(() -> new RuntimeException("Specialty " + specialty.getName() + "not found", new NotFoundException()))
            );
        });

        dbUser.setDni(userData.getDni());
        dbUser.setFirstName(userData.getFirstName());
        dbUser.setLastName(userData.getLastName());
        dbUser.setPassword(userData.getPassword());
        dbUser.setEmail(userData.getEmail());
        dbUser.setRole(roles);
        dbUser.setSpecialtyArea(specialtyAreas);

        User savedUser = userRepository.save(dbUser);

        return new UserDTO(savedUser);
    }

    public void deleteUser(Integer dni){
        userRepository.deleteById(dni);
    }


}
