class CitySerializer < ActiveModel::Serializer
  attributes :id, :name, :state, :local_gov_phone, :loval_gov_email
end
