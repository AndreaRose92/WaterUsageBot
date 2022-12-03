class GolfCourseSerializer < ActiveModel::Serializer
  attributes :name, :water_usage, :comparison
  has_one :city

  def comparison
    "#{self.object.name} used #{(self.object.water_usage.to_i * 7)} gallons in the last week. That's #{self.object.crunch_numbers} worth of fresh water."
  end
end
