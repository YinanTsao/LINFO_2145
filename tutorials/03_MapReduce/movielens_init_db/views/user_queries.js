const viewDescriptor = {
  views: {
    movies_per_category: {
      map: function (doc) {
        if (doc.category && doc.movieId) {
          emit(doc.category, 1)
        }
      },
      reduce: function (key, values) {
        return sum(values)
      }
    }

    ranking_by_avg: {
      map: function (doc) {
        if (doc.category && doc.rating) {
          emit(doc.category, doc.rating)
        }
      },
      reduce: function(keys, values, rereduce) {
    if (!rereduce) {
        var length = values.length
        return [sum(values) / length, length]
    } else {
        var length = sum(values.map(function(v){return v[1]}))
        var avg = sum(values.map(function(v){
            return v[0] * (v[1] / length)
        }))
        return [avg, length]
    }
}

    }

  }
}
module.exports = { viewDescriptor }
