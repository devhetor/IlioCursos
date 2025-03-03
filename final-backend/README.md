# HasMany

A hasMany relation denotes a one-to-many connection of a model to another model through referential integrity.

## One to Many Relationship

_A student can take many courses_

**Source model: Course** <br>
**Target model: Student**

_Student model will have the primary key of Course model as foriegn key_

---

# belongsTo

A belongsTo relation denotes a many-to-one connection of a model to another model through referential integrity.

## One to Many Relationship

_Many students can belongs to one department_

**Source model: Student** <br>
**Target model: Department**

_Student model will have the primary key of Department model as foriegn key_

## hasOne

A hasOne relation denotes a one-to-one connection of a model to another model through referential integrity.

_A Student can only have one Address_

### Steps

1. Create HasOne Relation
2. Add BelongsTo Relation
3. Setup Database
4. Configure relation with Source Repository
5. Add Controller for one to one relation
