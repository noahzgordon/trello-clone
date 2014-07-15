# == Schema Information
#
# Table name: lists
#
#  id         :integer          not null, primary key
#  title      :string(255)      not null
#  board_id   :integer          not null
#  ord        :float            default(0.0)
#  created_at :datetime
#  updated_at :datetime
#

class List < ActiveRecord::Base
  belongs_to :board
  has_many :cards
end
