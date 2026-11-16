# EDDI presentation

## Abstract

**Activating DDI to automate scripts and visualize provenance**

DDI can be used to describe statistical datasets, yet it often remains a passive layer of documentation. In parallel, analysts process those datasets with ad hoc code in many languages, with little connection between what is documented and what is actually executed. This gap makes transformations harder to reproduce, compare, and audit.

This presentation explores whether DDI can support not only description, but also activation. We describe our transformations in the Validation and Transformation Language (VTL), a neutral, standardized language for statistical processing, and connect VTL to DDI metadata through a reference model that makes explicit how datasets, variables, and scripts relate. Executed via Trevas, an open-source VTL engine, such scripts can initialise processing from DDI descriptions and write results back into the metadata lifecycle.

The same pipeline also yields lineage: Trevas can derive provenance from VTL execution and express it as Statistical Data and Transformation History (SDTH), another DDI Alliance vocabulary. The argument is therefore not merely that VTL is technically feasible, but that DDI may become the hub of a documented and executable workflow, where metadata, transformations, and lineage are articulated into a single standards-based pipeline.

## Related issues

- Is GenerationInstruction the right place for dataset transformation code? [#107](https://github.com/ddialliance/ddimodel/issues/107)
- How should a short programmatic name for a dataset be represented? [#108](https://github.com/ddialliance/ddimodel/issues/108)

## Storytelling

- Introduce VTL
- VTL/DDI
- VTL/SDTH
- ...
- Demo:
    - define simple business case:
        - business: we have 1/2 datasets containing...
        - technical: DDI SU with variables, source and target? + transformation to perform
    - Vestal
    - Local SDTH or push when running in GraphDB?
    - Bassac or not?
- CCL: DDI model - limits