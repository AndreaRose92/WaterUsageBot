class GolfCourse < ApplicationRecord
  belongs_to :city

  def crunch_numbers
    option = rand(1..5)
    case option
    when 1
      output = "#{((self.water_usage.to_i * 7) / 660000)} olympic swimming pools"
    when 2
      output = "#{((self.water_usage.to_i * 7) / 80)} bathtubs"
    when 3
      output = "#{((self.water_usage.to_i * 7) / 40000000)} days of US coffee consumption"
    when 4
      output = "#{((self.water_usage.to_i * 7) / 1000000)} water towers"
    when 5
      output = "#{((self.water_usage.to_i * 7) / 113)} years of coffee for the average American"
    end
  end
end
