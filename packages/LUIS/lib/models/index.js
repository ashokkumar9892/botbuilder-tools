"use strict";
/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines values for TrainingStatus.
 * Possible values include: 'NeedsTraining', 'InProgress', 'Trained'
 * @readonly
 * @enum {string}
 */
var TrainingStatus;
(function (TrainingStatus) {
    TrainingStatus["NeedsTraining"] = "NeedsTraining";
    TrainingStatus["InProgress"] = "InProgress";
    TrainingStatus["Trained"] = "Trained";
})(TrainingStatus = exports.TrainingStatus || (exports.TrainingStatus = {}));
/**
 * Defines values for OperationStatusType.
 * Possible values include: 'Failed', 'FAILED', 'Success'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: OperationStatusType =
 * <OperationStatusType>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var OperationStatusType;
(function (OperationStatusType) {
    OperationStatusType["Failed"] = "Failed";
    OperationStatusType["FAILED"] = "FAILED";
    OperationStatusType["Success"] = "Success";
})(OperationStatusType = exports.OperationStatusType || (exports.OperationStatusType = {}));
/**
 * Defines values for AzureRegions.
 * Possible values include: 'westus', 'westeurope', 'southeastasia', 'eastus2',
 * 'westcentralus', 'westus2', 'eastus', 'southcentralus', 'northeurope',
 * 'eastasia', 'australiaeast', 'brazilsouth'
 * @readonly
 * @enum {string}
 */
var AzureRegions;
(function (AzureRegions) {
    AzureRegions["Westus"] = "westus";
    AzureRegions["Westeurope"] = "westeurope";
    AzureRegions["Southeastasia"] = "southeastasia";
    AzureRegions["Eastus2"] = "eastus2";
    AzureRegions["Westcentralus"] = "westcentralus";
    AzureRegions["Westus2"] = "westus2";
    AzureRegions["Eastus"] = "eastus";
    AzureRegions["Southcentralus"] = "southcentralus";
    AzureRegions["Northeurope"] = "northeurope";
    AzureRegions["Eastasia"] = "eastasia";
    AzureRegions["Australiaeast"] = "australiaeast";
    AzureRegions["Brazilsouth"] = "brazilsouth";
})(AzureRegions = exports.AzureRegions || (exports.AzureRegions = {}));
/**
 * Defines values for ReadableType.
 * Possible values include: 'Entity Extractor', 'Hierarchical Entity
 * Extractor', 'Hierarchical Child Entity Extractor', 'Composite Entity
 * Extractor', 'Closed List Entity Extractor', 'Prebuilt Entity Extractor',
 * 'Intent Classifier', 'Pattern.Any Entity Extractor', 'Regex Entity
 * Extractor'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: ReadableType =
 * <ReadableType>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var ReadableType;
(function (ReadableType) {
    ReadableType["EntityExtractor"] = "Entity Extractor";
    ReadableType["HierarchicalEntityExtractor"] = "Hierarchical Entity Extractor";
    ReadableType["HierarchicalChildEntityExtractor"] = "Hierarchical Child Entity Extractor";
    ReadableType["CompositeEntityExtractor"] = "Composite Entity Extractor";
    ReadableType["ClosedListEntityExtractor"] = "Closed List Entity Extractor";
    ReadableType["PrebuiltEntityExtractor"] = "Prebuilt Entity Extractor";
    ReadableType["IntentClassifier"] = "Intent Classifier";
    ReadableType["PatternAnyEntityExtractor"] = "Pattern.Any Entity Extractor";
    ReadableType["RegexEntityExtractor"] = "Regex Entity Extractor";
})(ReadableType = exports.ReadableType || (exports.ReadableType = {}));
/**
 * Defines values for ReadableType1.
 * Possible values include: 'Entity Extractor', 'Hierarchical Entity
 * Extractor', 'Hierarchical Child Entity Extractor', 'Composite Entity
 * Extractor', 'Closed List Entity Extractor', 'Prebuilt Entity Extractor',
 * 'Intent Classifier', 'Pattern.Any Entity Extractor', 'Regex Entity
 * Extractor'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: ReadableType1 =
 * <ReadableType1>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var ReadableType1;
(function (ReadableType1) {
    ReadableType1["EntityExtractor"] = "Entity Extractor";
    ReadableType1["HierarchicalEntityExtractor"] = "Hierarchical Entity Extractor";
    ReadableType1["HierarchicalChildEntityExtractor"] = "Hierarchical Child Entity Extractor";
    ReadableType1["CompositeEntityExtractor"] = "Composite Entity Extractor";
    ReadableType1["ClosedListEntityExtractor"] = "Closed List Entity Extractor";
    ReadableType1["PrebuiltEntityExtractor"] = "Prebuilt Entity Extractor";
    ReadableType1["IntentClassifier"] = "Intent Classifier";
    ReadableType1["PatternAnyEntityExtractor"] = "Pattern.Any Entity Extractor";
    ReadableType1["RegexEntityExtractor"] = "Regex Entity Extractor";
})(ReadableType1 = exports.ReadableType1 || (exports.ReadableType1 = {}));
/**
 * Defines values for ReadableType2.
 * Possible values include: 'Entity Extractor', 'Hierarchical Entity
 * Extractor', 'Hierarchical Child Entity Extractor', 'Composite Entity
 * Extractor', 'Closed List Entity Extractor', 'Prebuilt Entity Extractor',
 * 'Intent Classifier', 'Pattern.Any Entity Extractor', 'Regex Entity
 * Extractor'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: ReadableType2 =
 * <ReadableType2>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var ReadableType2;
(function (ReadableType2) {
    ReadableType2["EntityExtractor"] = "Entity Extractor";
    ReadableType2["HierarchicalEntityExtractor"] = "Hierarchical Entity Extractor";
    ReadableType2["HierarchicalChildEntityExtractor"] = "Hierarchical Child Entity Extractor";
    ReadableType2["CompositeEntityExtractor"] = "Composite Entity Extractor";
    ReadableType2["ClosedListEntityExtractor"] = "Closed List Entity Extractor";
    ReadableType2["PrebuiltEntityExtractor"] = "Prebuilt Entity Extractor";
    ReadableType2["IntentClassifier"] = "Intent Classifier";
    ReadableType2["PatternAnyEntityExtractor"] = "Pattern.Any Entity Extractor";
    ReadableType2["RegexEntityExtractor"] = "Regex Entity Extractor";
})(ReadableType2 = exports.ReadableType2 || (exports.ReadableType2 = {}));
/**
 * Defines values for ReadableType3.
 * Possible values include: 'Entity Extractor', 'Hierarchical Entity
 * Extractor', 'Hierarchical Child Entity Extractor', 'Composite Entity
 * Extractor', 'Closed List Entity Extractor', 'Prebuilt Entity Extractor',
 * 'Intent Classifier', 'Pattern.Any Entity Extractor', 'Regex Entity
 * Extractor'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: ReadableType3 =
 * <ReadableType3>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var ReadableType3;
(function (ReadableType3) {
    ReadableType3["EntityExtractor"] = "Entity Extractor";
    ReadableType3["HierarchicalEntityExtractor"] = "Hierarchical Entity Extractor";
    ReadableType3["HierarchicalChildEntityExtractor"] = "Hierarchical Child Entity Extractor";
    ReadableType3["CompositeEntityExtractor"] = "Composite Entity Extractor";
    ReadableType3["ClosedListEntityExtractor"] = "Closed List Entity Extractor";
    ReadableType3["PrebuiltEntityExtractor"] = "Prebuilt Entity Extractor";
    ReadableType3["IntentClassifier"] = "Intent Classifier";
    ReadableType3["PatternAnyEntityExtractor"] = "Pattern.Any Entity Extractor";
    ReadableType3["RegexEntityExtractor"] = "Regex Entity Extractor";
})(ReadableType3 = exports.ReadableType3 || (exports.ReadableType3 = {}));
/**
 * Defines values for ReadableType4.
 * Possible values include: 'Entity Extractor', 'Hierarchical Entity
 * Extractor', 'Hierarchical Child Entity Extractor', 'Composite Entity
 * Extractor', 'Closed List Entity Extractor', 'Prebuilt Entity Extractor',
 * 'Intent Classifier', 'Pattern.Any Entity Extractor', 'Regex Entity
 * Extractor'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: ReadableType4 =
 * <ReadableType4>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var ReadableType4;
(function (ReadableType4) {
    ReadableType4["EntityExtractor"] = "Entity Extractor";
    ReadableType4["HierarchicalEntityExtractor"] = "Hierarchical Entity Extractor";
    ReadableType4["HierarchicalChildEntityExtractor"] = "Hierarchical Child Entity Extractor";
    ReadableType4["CompositeEntityExtractor"] = "Composite Entity Extractor";
    ReadableType4["ClosedListEntityExtractor"] = "Closed List Entity Extractor";
    ReadableType4["PrebuiltEntityExtractor"] = "Prebuilt Entity Extractor";
    ReadableType4["IntentClassifier"] = "Intent Classifier";
    ReadableType4["PatternAnyEntityExtractor"] = "Pattern.Any Entity Extractor";
    ReadableType4["RegexEntityExtractor"] = "Regex Entity Extractor";
})(ReadableType4 = exports.ReadableType4 || (exports.ReadableType4 = {}));
/**
 * Defines values for ReadableType5.
 * Possible values include: 'Entity Extractor', 'Hierarchical Entity
 * Extractor', 'Hierarchical Child Entity Extractor', 'Composite Entity
 * Extractor', 'Closed List Entity Extractor', 'Prebuilt Entity Extractor',
 * 'Intent Classifier', 'Pattern.Any Entity Extractor', 'Regex Entity
 * Extractor'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: ReadableType5 =
 * <ReadableType5>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var ReadableType5;
(function (ReadableType5) {
    ReadableType5["EntityExtractor"] = "Entity Extractor";
    ReadableType5["HierarchicalEntityExtractor"] = "Hierarchical Entity Extractor";
    ReadableType5["HierarchicalChildEntityExtractor"] = "Hierarchical Child Entity Extractor";
    ReadableType5["CompositeEntityExtractor"] = "Composite Entity Extractor";
    ReadableType5["ClosedListEntityExtractor"] = "Closed List Entity Extractor";
    ReadableType5["PrebuiltEntityExtractor"] = "Prebuilt Entity Extractor";
    ReadableType5["IntentClassifier"] = "Intent Classifier";
    ReadableType5["PatternAnyEntityExtractor"] = "Pattern.Any Entity Extractor";
    ReadableType5["RegexEntityExtractor"] = "Regex Entity Extractor";
})(ReadableType5 = exports.ReadableType5 || (exports.ReadableType5 = {}));
/**
 * Defines values for ReadableType6.
 * Possible values include: 'Entity Extractor', 'Hierarchical Entity
 * Extractor', 'Hierarchical Child Entity Extractor', 'Composite Entity
 * Extractor', 'Closed List Entity Extractor', 'Prebuilt Entity Extractor',
 * 'Intent Classifier', 'Pattern.Any Entity Extractor', 'Regex Entity
 * Extractor'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: ReadableType6 =
 * <ReadableType6>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var ReadableType6;
(function (ReadableType6) {
    ReadableType6["EntityExtractor"] = "Entity Extractor";
    ReadableType6["HierarchicalEntityExtractor"] = "Hierarchical Entity Extractor";
    ReadableType6["HierarchicalChildEntityExtractor"] = "Hierarchical Child Entity Extractor";
    ReadableType6["CompositeEntityExtractor"] = "Composite Entity Extractor";
    ReadableType6["ClosedListEntityExtractor"] = "Closed List Entity Extractor";
    ReadableType6["PrebuiltEntityExtractor"] = "Prebuilt Entity Extractor";
    ReadableType6["IntentClassifier"] = "Intent Classifier";
    ReadableType6["PatternAnyEntityExtractor"] = "Pattern.Any Entity Extractor";
    ReadableType6["RegexEntityExtractor"] = "Regex Entity Extractor";
})(ReadableType6 = exports.ReadableType6 || (exports.ReadableType6 = {}));
/**
 * Defines values for ReadableType7.
 * Possible values include: 'Entity Extractor', 'Hierarchical Entity
 * Extractor', 'Hierarchical Child Entity Extractor', 'Composite Entity
 * Extractor', 'Closed List Entity Extractor', 'Prebuilt Entity Extractor',
 * 'Intent Classifier', 'Pattern.Any Entity Extractor', 'Regex Entity
 * Extractor'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: ReadableType7 =
 * <ReadableType7>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var ReadableType7;
(function (ReadableType7) {
    ReadableType7["EntityExtractor"] = "Entity Extractor";
    ReadableType7["HierarchicalEntityExtractor"] = "Hierarchical Entity Extractor";
    ReadableType7["HierarchicalChildEntityExtractor"] = "Hierarchical Child Entity Extractor";
    ReadableType7["CompositeEntityExtractor"] = "Composite Entity Extractor";
    ReadableType7["ClosedListEntityExtractor"] = "Closed List Entity Extractor";
    ReadableType7["PrebuiltEntityExtractor"] = "Prebuilt Entity Extractor";
    ReadableType7["IntentClassifier"] = "Intent Classifier";
    ReadableType7["PatternAnyEntityExtractor"] = "Pattern.Any Entity Extractor";
    ReadableType7["RegexEntityExtractor"] = "Regex Entity Extractor";
})(ReadableType7 = exports.ReadableType7 || (exports.ReadableType7 = {}));
/**
 * Defines values for ReadableType8.
 * Possible values include: 'Entity Extractor', 'Hierarchical Entity
 * Extractor', 'Hierarchical Child Entity Extractor', 'Composite Entity
 * Extractor', 'Closed List Entity Extractor', 'Prebuilt Entity Extractor',
 * 'Intent Classifier', 'Pattern.Any Entity Extractor', 'Regex Entity
 * Extractor'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: ReadableType8 =
 * <ReadableType8>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var ReadableType8;
(function (ReadableType8) {
    ReadableType8["EntityExtractor"] = "Entity Extractor";
    ReadableType8["HierarchicalEntityExtractor"] = "Hierarchical Entity Extractor";
    ReadableType8["HierarchicalChildEntityExtractor"] = "Hierarchical Child Entity Extractor";
    ReadableType8["CompositeEntityExtractor"] = "Composite Entity Extractor";
    ReadableType8["ClosedListEntityExtractor"] = "Closed List Entity Extractor";
    ReadableType8["PrebuiltEntityExtractor"] = "Prebuilt Entity Extractor";
    ReadableType8["IntentClassifier"] = "Intent Classifier";
    ReadableType8["PatternAnyEntityExtractor"] = "Pattern.Any Entity Extractor";
    ReadableType8["RegexEntityExtractor"] = "Regex Entity Extractor";
})(ReadableType8 = exports.ReadableType8 || (exports.ReadableType8 = {}));
/**
 * Defines values for Status.
 * Possible values include: 'Queued', 'InProgress', 'UpToDate', 'Fail',
 * 'Success'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Status = <Status>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var Status;
(function (Status) {
    Status["Queued"] = "Queued";
    Status["InProgress"] = "InProgress";
    Status["UpToDate"] = "UpToDate";
    Status["Fail"] = "Fail";
    Status["Success"] = "Success";
})(Status = exports.Status || (exports.Status = {}));
/**
 * Defines values for Status1.
 * Possible values include: 'Queued', 'InProgress', 'UpToDate', 'Fail',
 * 'Success'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Status1 = <Status1>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var Status1;
(function (Status1) {
    Status1["Queued"] = "Queued";
    Status1["InProgress"] = "InProgress";
    Status1["UpToDate"] = "UpToDate";
    Status1["Fail"] = "Fail";
    Status1["Success"] = "Success";
})(Status1 = exports.Status1 || (exports.Status1 = {}));
/**
 * Defines values for ReadableType9.
 * Possible values include: 'Entity Extractor', 'Hierarchical Entity
 * Extractor', 'Hierarchical Child Entity Extractor', 'Composite Entity
 * Extractor', 'Closed List Entity Extractor', 'Prebuilt Entity Extractor',
 * 'Intent Classifier', 'Pattern.Any Entity Extractor', 'Regex Entity
 * Extractor'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: ReadableType9 =
 * <ReadableType9>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var ReadableType9;
(function (ReadableType9) {
    ReadableType9["EntityExtractor"] = "Entity Extractor";
    ReadableType9["HierarchicalEntityExtractor"] = "Hierarchical Entity Extractor";
    ReadableType9["HierarchicalChildEntityExtractor"] = "Hierarchical Child Entity Extractor";
    ReadableType9["CompositeEntityExtractor"] = "Composite Entity Extractor";
    ReadableType9["ClosedListEntityExtractor"] = "Closed List Entity Extractor";
    ReadableType9["PrebuiltEntityExtractor"] = "Prebuilt Entity Extractor";
    ReadableType9["IntentClassifier"] = "Intent Classifier";
    ReadableType9["PatternAnyEntityExtractor"] = "Pattern.Any Entity Extractor";
    ReadableType9["RegexEntityExtractor"] = "Regex Entity Extractor";
})(ReadableType9 = exports.ReadableType9 || (exports.ReadableType9 = {}));
/**
 * Defines values for ReadableType10.
 * Possible values include: 'Entity Extractor', 'Hierarchical Entity
 * Extractor', 'Hierarchical Child Entity Extractor', 'Composite Entity
 * Extractor', 'Closed List Entity Extractor', 'Prebuilt Entity Extractor',
 * 'Intent Classifier', 'Pattern.Any Entity Extractor', 'Regex Entity
 * Extractor'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: ReadableType10 =
 * <ReadableType10>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var ReadableType10;
(function (ReadableType10) {
    ReadableType10["EntityExtractor"] = "Entity Extractor";
    ReadableType10["HierarchicalEntityExtractor"] = "Hierarchical Entity Extractor";
    ReadableType10["HierarchicalChildEntityExtractor"] = "Hierarchical Child Entity Extractor";
    ReadableType10["CompositeEntityExtractor"] = "Composite Entity Extractor";
    ReadableType10["ClosedListEntityExtractor"] = "Closed List Entity Extractor";
    ReadableType10["PrebuiltEntityExtractor"] = "Prebuilt Entity Extractor";
    ReadableType10["IntentClassifier"] = "Intent Classifier";
    ReadableType10["PatternAnyEntityExtractor"] = "Pattern.Any Entity Extractor";
    ReadableType10["RegexEntityExtractor"] = "Regex Entity Extractor";
})(ReadableType10 = exports.ReadableType10 || (exports.ReadableType10 = {}));
//# sourceMappingURL=index.js.map