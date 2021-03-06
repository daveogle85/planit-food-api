package com.planitfood.models;

import com.amazonaws.services.dynamodbv2.datamodeling.*;
import com.planitfood.enums.Unit;

import javax.validation.constraints.NotNull;

@DynamoDBTable(tableName = "Ingredient")
@DynamoDBDocument
public class Ingredient {

    private String id;
    @NotNull
    private String name;
    private String searchName;
    private Double quantity;
    private Unit unit = Unit.UNIT;

    // Needed for DynamoDB
    public Ingredient() {
    }

    public Ingredient(String id) {
        this.id = id;
    }

    public Ingredient(String id, String name) {
        this.id = id;
        this.name = name;
        this.searchName = name.toLowerCase();
    }

    public Ingredient(String id, String name, double quantity, Unit unit) {
        this.id = id;
        this.name = name;
        this.searchName = name.toLowerCase();
        this.quantity = quantity;
        this.unit = unit;
    }

    @DynamoDBHashKey(attributeName = "ID")
    @DynamoDBAutoGeneratedKey
    public String getId() {
        return id;
    }

    @DynamoDBHashKey(attributeName = "ID")
    @DynamoDBAutoGeneratedKey
    public void setId(String id) {
        this.id = id;
    }

    @DynamoDBAttribute(attributeName = "Name")
    public String getName() {
        return name;
    }

    @DynamoDBAttribute(attributeName = "Name")
    public void setName(String name) {
        this.name = name;
        this.searchName = name.toLowerCase();
    }

    @DynamoDBIndexHashKey(attributeName = "SearchName", globalSecondaryIndexName = "SearchName-index")
    public String getSearchName() {
        return searchName;
    }

    @DynamoDBIndexHashKey(attributeName = "SearchName", globalSecondaryIndexName = "SearchName-index")
    @DynamoDBRangeKey(attributeName = "SearchName")
    public void setSearchName(String searchName) {
        this.searchName = searchName;
    }

    @DynamoDBIgnore
    public Double getQuantity() {
        return quantity;
    }

    @DynamoDBIgnore
    public void setQuantity(double quantity) {
        this.quantity = quantity;
    }

    @DynamoDBIgnore
    public Unit getUnit() {
        return unit;
    }

    @DynamoDBIgnore
    public void setUnit(Unit unit) {
        this.unit = unit;
    }
}
