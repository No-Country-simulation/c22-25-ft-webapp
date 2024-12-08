package com.webapp.backend.components.specialtyArea;

import com.webapp.backend.user.UserDTO;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class SpecialtyAreaService {
    private final SpecialtyAreaRepository specialtyAreaRepository;

    public List<SpecialtyAreaDTO> getAllSpecialtyAreas(){
        List<SpecialtyArea> dbSpecialtyAreas = specialtyAreaRepository.findAll();
        return dbSpecialtyAreas.stream().map(SpecialtyAreaDTO::new).toList();
    }

    public SpecialtyAreaDTO saveSpecialtyArea(SpecialtyAreaDTO specialtyAreaData){
        SpecialtyArea newSpecialtyArea = SpecialtyArea.builder()
                .name(specialtyAreaData.getName())
                .description(specialtyAreaData.getDescription())
                .build();
        return new SpecialtyAreaDTO(specialtyAreaRepository.save(newSpecialtyArea));
    }

    public SpecialtyAreaDTO updateSpecialtyArea(SpecialtyAreaDTO specialtyAreaData, Integer id){
        SpecialtyArea dbSpecialtyArea = specialtyAreaRepository.findById(id).orElseThrow(()-> new RuntimeException("Specialty area not found"));

        dbSpecialtyArea.setName(specialtyAreaData.getName());
        dbSpecialtyArea.setDescription(specialtyAreaData.getDescription());

        return new SpecialtyAreaDTO(specialtyAreaRepository.save(dbSpecialtyArea));
    }

    public void deleteSpecialtyArea(Integer id){
        specialtyAreaRepository.deleteById(id);
    }
}
