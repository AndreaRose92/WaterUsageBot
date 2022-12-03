class GolfCourseSerializer < ActiveModel::Serializer
  attributes :id, :name, :water_usage
  has_one :city
end
