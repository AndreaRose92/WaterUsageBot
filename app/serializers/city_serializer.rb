class CitySerializer < ActiveModel::Serializer
  attributes :name, :state, :local_gov_phone, :local_gov_email
end
