package com.slaen.salen.controller;

import com.slaen.salen.entity.Region;
import com.slaen.salen.service.Saleninterface.RegionInterface;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin("*")
@RequestMapping("/api/region")
public class RegionController {

    private RegionInterface regionInterface;
    public RegionController(RegionInterface regionInterface) {
        this.regionInterface = regionInterface;
    }

    @GetMapping(value = "/listeRegions")
    public List<Region> listeRegion(){
        return regionInterface.listeRegions();
    }

    @PostMapping(value = "/addRegion")
    public Region addRegion(@RequestBody Region region){
       return regionInterface.addRegion(region);
    }

    @GetMapping(value = "/listeById/{id}")
    public Region ListeById(@PathVariable(name = "id") long id){
      return   regionInterface.RegionById(id);
    }

    @PutMapping(value = "/updateRegion/{id}")
    public Region updateRegion(@PathVariable(name = "id") Long id, @RequestBody Region region){
        region.setIdRegion(id);
        return regionInterface.UpdateRegion(region);
    }

    @DeleteMapping(value = "deleteById/{id}")
    public void deleteById( @PathVariable(name = "id") Long id){
        regionInterface.deleteRegion(id);
    }



}
