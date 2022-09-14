package com.slaen.salen.service.Saleninterface;

import com.slaen.salen.entity.Cercle;
import com.slaen.salen.entity.Region;
import org.springframework.data.domain.Page;

import java.util.List;

public interface RegionInterface {

    public Region addRegion(Region region);
    public List<Region> listeRegions();
    public Region RegionById(long id);
    public Region UpdateRegion(Region region);
    public void deleteRegion(long id);

}
