# encoding: UTF-8

# This file contains data derived from the IANA Time Zone Database
# (https://www.iana.org/time-zones).

module TZInfo
  module Data
    module Definitions
      module US
        module Hawaii
          include TimezoneDefinition
          
          linked_timezone 'US/Hawaii', 'Pacific/Honolulu'
        end
      end
    end
  end
end
