package com.slaen.salen.moduleTD.Taxe;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaxeService {
    @Autowired
    private TaxeRepository taxeRepository;
}
