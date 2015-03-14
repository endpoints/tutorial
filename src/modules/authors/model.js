const BaseModel = require('../../classes/base_model');

const instanceProps = {
  tableName: 'authors'
};

const classProps = {
  typeName: 'authors',
  filters: {
    id: function (qb, value) {
      return qb.whereIn('id', value);
    },
    name: function (qb, value) {
      return qb.whereIn('name', value)
    },
    alive: function (qb, value) {
      if (value) {
        return qb.whereNull('date_of_death');
      } else {
        return qb.whereNotNull('date_of_death');
      }
    },
    dead: function (qb, value) {
      return this.alive(qb, !value);
    }
  }
};

module.exports = BaseModel.extend(instanceProps, classProps);
