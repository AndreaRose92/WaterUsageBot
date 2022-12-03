class GolfCourseSerializer < ActiveModel::Serializer
  attributes :name, :water_usage, :comparison
  has_one :city

  def comparison
    sample = Comparison.all.sample
    "#{self.object.name} in #{self.object.city.name}, #{self.object.city.state} used #{(self.object.water_usage.to_i * 7)} in the last week. That's #{((self.object.water_usage.to_i * 7) / sample.volume)} #{sample.tidbit}."
  end
end
