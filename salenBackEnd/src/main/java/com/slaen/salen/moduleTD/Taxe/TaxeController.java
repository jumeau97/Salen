package com.slaen.salen.moduleTD.Taxe;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TaxeController {
    @Autowired
    TaxeService taxeService;
}
