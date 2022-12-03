class CitiesController < ApplicationController
  def index
    render json: City.all
  end

  def show
    render json: find_city
  end

  def create
    city = City.find_or_create_by(name: params[:name]) do |new_city|
      new_city.update(city_params)
    end
    render json: city, status: :created
  end

  def update
    city = find_city
    city.update(city_params)
    render json: city
  end

  private

  def find_city
    City.find_by(name: params[:name])
  end

  def city_params
    params.permit(:name, :state, :local_gov_phone, :loval_gov_email)
  end
end
