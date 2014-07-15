# == Schema Information
#
# Table name: card_assignments
#
#  id         :integer          not null, primary key
#  card_id    :integer          not null
#  user_id    :integer          not null
#  created_at :datetime
#  updated_at :datetime
#

class CardAssignment < ActiveRecord::Base
  belongs_to :card
  belongs_to :user
end
